import NewTibiaretroKeywordPage, { generateMetadata } from './new-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroKeywordPage />;
}
