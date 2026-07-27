import OfficialThorniaOtServerKeywordPage, { generateMetadata } from './official-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaOtServerKeywordPage />;
}
