import NoResetTibiaretroLoginKeywordPage, { generateMetadata } from './no-reset-tibiaretro-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaretroLoginKeywordPage />;
}
