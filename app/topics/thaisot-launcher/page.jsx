import ThaisotLauncherKeywordPage, { generateMetadata } from './thaisot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotLauncherKeywordPage />;
}
