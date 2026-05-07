import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "Tibia Servers - Directory & Listing",
  description: "Browse and compare open Tibia servers with comprehensive stats, rates, and details. Find the perfect server for you.",
  keywords: ["Tibia", "Servers", "Open Tibia", "OT Server", "Directory"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
