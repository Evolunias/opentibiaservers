import ActiveTibiaretroLoginKeywordPage, { generateMetadata } from './active-tibiaretro-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroLoginKeywordPage />;
}
