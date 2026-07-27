import ActiveTibiascapeRegisterKeywordPage, { generateMetadata } from './active-tibiascape-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeRegisterKeywordPage />;
}
