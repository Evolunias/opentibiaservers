import TopAureraGlobalTibiaKeywordPage, { generateMetadata } from './top-aurera-global-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalTibiaKeywordPage />;
}
