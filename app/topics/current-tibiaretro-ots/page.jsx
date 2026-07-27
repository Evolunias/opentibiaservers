import CurrentTibiaretroOtsKeywordPage, { generateMetadata } from './current-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroOtsKeywordPage />;
}
