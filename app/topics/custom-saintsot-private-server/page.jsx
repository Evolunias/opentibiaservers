import CustomSaintsotPrivateServerKeywordPage, { generateMetadata } from './custom-saintsot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotPrivateServerKeywordPage />;
}
