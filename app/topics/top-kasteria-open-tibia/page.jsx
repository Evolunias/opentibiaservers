import TopKasteriaOpenTibiaKeywordPage, { generateMetadata } from './top-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaOpenTibiaKeywordPage />;
}
