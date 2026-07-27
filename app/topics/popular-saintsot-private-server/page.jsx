import PopularSaintsotPrivateServerKeywordPage, { generateMetadata } from './popular-saintsot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotPrivateServerKeywordPage />;
}
