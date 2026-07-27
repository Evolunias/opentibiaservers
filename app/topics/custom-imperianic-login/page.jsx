import CustomImperianicLoginKeywordPage, { generateMetadata } from './custom-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicLoginKeywordPage />;
}
