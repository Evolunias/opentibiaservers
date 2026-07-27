import SerenityPvpeKeywordPage, { generateMetadata } from './serenity-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityPvpeKeywordPage />;
}
