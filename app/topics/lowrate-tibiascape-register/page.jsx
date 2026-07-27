import LowrateTibiascapeRegisterKeywordPage, { generateMetadata } from './lowrate-tibiascape-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeRegisterKeywordPage />;
}
