import LowrateCanobOfficialKeywordPage, { generateMetadata } from './lowrate-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobOfficialKeywordPage />;
}
