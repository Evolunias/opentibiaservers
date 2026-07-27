import EtebraPage, { generateMetadata } from './etebra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EtebraPage />;
}
