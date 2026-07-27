import RubinotLaunchKeywordPage, { generateMetadata } from './rubinot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotLaunchKeywordPage />;
}
