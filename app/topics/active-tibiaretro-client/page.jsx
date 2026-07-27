import ActiveTibiaretroClientKeywordPage, { generateMetadata } from './active-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroClientKeywordPage />;
}
