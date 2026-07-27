import CustomThaisotPrivateServerKeywordPage, { generateMetadata } from './custom-thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotPrivateServerKeywordPage />;
}
