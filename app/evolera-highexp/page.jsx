import EvoleraHighexpPage, { generateMetadata } from './evolera-highexp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraHighexpPage />;
}
