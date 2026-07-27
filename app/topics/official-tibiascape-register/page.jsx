import OfficialTibiascapeRegisterKeywordPage, { generateMetadata } from './official-tibiascape-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeRegisterKeywordPage />;
}
