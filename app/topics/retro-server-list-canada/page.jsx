import RetroServerListCanadaKeywordPage, { generateMetadata } from './retro-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServerListCanadaKeywordPage />;
}
