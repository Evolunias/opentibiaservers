import TibiascapeLaunchKeywordPage, { generateMetadata } from './tibiascape-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeLaunchKeywordPage />;
}
