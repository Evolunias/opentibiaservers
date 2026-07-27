import CurrentTibiaretroOtKeywordPage, { generateMetadata } from './current-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroOtKeywordPage />;
}
