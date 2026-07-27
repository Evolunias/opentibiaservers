import CustomImperianicClientKeywordPage, { generateMetadata } from './custom-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicClientKeywordPage />;
}
