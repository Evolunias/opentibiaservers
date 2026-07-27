import SerenityPvpServerUsaKeywordPage, { generateMetadata } from './serenity-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityPvpServerUsaKeywordPage />;
}
