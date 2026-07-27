import OfficialAmeriaKeywordPage, { generateMetadata } from './official-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaKeywordPage />;
}
