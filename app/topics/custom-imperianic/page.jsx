import CustomImperianicKeywordPage, { generateMetadata } from './custom-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicKeywordPage />;
}
