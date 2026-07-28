import TheForgottenServerPage, { generateMetadata } from './the-forgotten-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerPage />;
}
