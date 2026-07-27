import ActiveTibiaretroKeywordPage, { generateMetadata } from './active-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroKeywordPage />;
}
