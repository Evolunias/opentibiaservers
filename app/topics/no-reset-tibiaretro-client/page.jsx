import NoResetTibiaretroClientKeywordPage, { generateMetadata } from './no-reset-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaretroClientKeywordPage />;
}
