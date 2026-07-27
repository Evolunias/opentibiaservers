import TopNepreniaOpenTibiaKeywordPage, { generateMetadata } from './top-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaOpenTibiaKeywordPage />;
}
