import TopArchlightTibiaKeywordPage, { generateMetadata } from './top-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightTibiaKeywordPage />;
}
