import CurrentTibiascapeRegisterKeywordPage, { generateMetadata } from './current-tibiascape-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeRegisterKeywordPage />;
}
