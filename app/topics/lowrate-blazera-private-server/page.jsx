import LowrateBlazeraPrivateServerKeywordPage, { generateMetadata } from './lowrate-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraPrivateServerKeywordPage />;
}
