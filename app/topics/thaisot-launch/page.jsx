import ThaisotLaunchKeywordPage, { generateMetadata } from './thaisot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotLaunchKeywordPage />;
}
