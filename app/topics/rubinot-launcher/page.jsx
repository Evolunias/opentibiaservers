import RubinotLauncherKeywordPage, { generateMetadata } from './rubinot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotLauncherKeywordPage />;
}
