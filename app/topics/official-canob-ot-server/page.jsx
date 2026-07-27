import OfficialCanobOtServerKeywordPage, { generateMetadata } from './official-canob-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobOtServerKeywordPage />;
}
