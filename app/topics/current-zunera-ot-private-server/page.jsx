import CurrentZuneraOtPrivateServerKeywordPage, { generateMetadata } from './current-zunera-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtPrivateServerKeywordPage />;
}
