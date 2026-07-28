import InfernoWarPage, { generateMetadata } from './inferno-war';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernoWarPage />;
}
