import OpentibiabrCanaryPage, { generateMetadata } from './opentibiabr-canary';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpentibiabrCanaryPage />;
}
