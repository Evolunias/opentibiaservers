import CurrentTibiaretroKeywordPage, { generateMetadata } from './current-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroKeywordPage />;
}
