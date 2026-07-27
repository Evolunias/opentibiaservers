import GentebraPage, { generateMetadata } from './gentebra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GentebraPage />;
}
