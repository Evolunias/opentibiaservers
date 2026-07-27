import NewTibiaretroClientKeywordPage, { generateMetadata } from './new-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroClientKeywordPage />;
}
