import CustomImperianicServerKeywordPage, { generateMetadata } from './custom-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicServerKeywordPage />;
}
