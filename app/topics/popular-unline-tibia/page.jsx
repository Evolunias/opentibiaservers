import PopularUnlineTibiaKeywordPage, { generateMetadata } from './popular-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineTibiaKeywordPage />;
}
