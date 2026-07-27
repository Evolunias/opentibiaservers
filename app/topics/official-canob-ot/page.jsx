import OfficialCanobOtKeywordPage, { generateMetadata } from './official-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobOtKeywordPage />;
}
