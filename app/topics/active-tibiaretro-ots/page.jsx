import ActiveTibiaretroOtsKeywordPage, { generateMetadata } from './active-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroOtsKeywordPage />;
}
