import CurrentTibiaretroClientKeywordPage, { generateMetadata } from './current-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroClientKeywordPage />;
}
