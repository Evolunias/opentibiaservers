import ResetwarFusionPage, { generateMetadata } from './resetwar-fusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ResetwarFusionPage />;
}
