import LowrateClassicusPrivateServerKeywordPage, { generateMetadata } from './lowrate-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusPrivateServerKeywordPage />;
}
