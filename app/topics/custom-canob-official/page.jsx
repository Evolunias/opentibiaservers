import CustomCanobOfficialKeywordPage, { generateMetadata } from './custom-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobOfficialKeywordPage />;
}
