import CustomCanobLoginKeywordPage, { generateMetadata } from './custom-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobLoginKeywordPage />;
}
